import { useState } from "react";
import { useToast } from "../ui/Toast";
import { Modal, TabHeader, EmptyState } from "./AdminShared";
import {
  useGetAllContent,
  useCreateContent,
  useUpdateContent,
  useDeleteContent,
  type Content,
  type CreateContentPayload,
  type UpdateContentPayload,
} from "../../hooks/useContent";

export default function ContentTab() {
  const { toast } = useToast();
  const { data: contentResponse, isLoading, error, refetch } = useGetAllContent();
  const content = contentResponse || [];
  const createContentMutation = useCreateContent();
  const updateContentMutation = useUpdateContent();
  const deleteContentMutation = useDeleteContent();
  
  const [showModal, setShowModal] = useState(false);
  const [editingContent, setEditingContent] = useState<Content | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContent = content.filter(item => 
    item.page.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.heading && item.heading.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCreate = () => {
    setEditingContent(null);
    setShowModal(true);
  };

  const handleEdit = (item: Content) => {
    setEditingContent(item);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    setDeleteId(id);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    
    try {
      await deleteContentMutation.mutateAsync(deleteId);
      toast("success", "Content deleted", "Content has been deleted successfully");
      setDeleteId(null);
      refetch();
    } catch (error) {
      toast("error", "Delete failed", "Failed to delete content");
    }
  };

  const handleSave = async (formData: CreateContentPayload | UpdateContentPayload) => {
    try {
      if (editingContent) {
        await updateContentMutation.mutateAsync({ 
          id: editingContent.id, 
          payload: formData as UpdateContentPayload 
        });
        toast("success", "Content updated", "Content has been updated successfully");
      } else {
        await createContentMutation.mutateAsync(formData as CreateContentPayload);
        toast("success", "Content created", "Content has been created successfully");
      }
      setShowModal(false);
      setEditingContent(null);
      refetch();
    } catch (error) {
      toast("error", "Save failed", "Failed to save content");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-600">Error loading content</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <TabHeader
        title="Content Management"
        subtitle={`Manage all page content across your website (${content.length} items)`}
        action={
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleCreate}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Add Content
            </button>
          </div>
        }
      />

      {content.length === 0 ? (
        <EmptyState
          icon="📝"
          message="No Content Found - Start by adding your first content item"
          action={
            <button
              onClick={handleCreate}
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Content
            </button>
          }
        />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heading</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredContent.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.page}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.section}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.title || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.heading || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {item.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.order}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Content Modal */}
      {showModal && (
        <ContentModal
          content={editingContent}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          isLoading={createContentMutation.isPending || updateContentMutation.isPending}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <Modal
          title="Delete Content"
          onClose={() => setDeleteId(null)}
        >
          <div className="space-y-4">
            <p className="text-gray-600">Are you sure you want to delete this content? This action cannot be undone.</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleteContentMutation.isPending}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
              >
                {deleteContentMutation.isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// Content Modal Component
interface ContentModalProps {
  content: Content | null;
  onClose: () => void;
  onSave: (data: CreateContentPayload | UpdateContentPayload) => void;
  isLoading: boolean;
}

function ContentModal({ content, onClose, onSave, isLoading }: ContentModalProps) {
  const [form, setForm] = useState<CreateContentPayload>({
    page: content?.page || "",
    section: content?.section || "",
    title: content?.title || "",
    heading: content?.heading || "",
    description: content?.description || "",
    imageUrl: content?.imageUrl || "",
    buttonText: content?.buttonText || "",
    buttonLink: content?.buttonLink || "",
    isActive: content?.isActive ?? true,
    order: content?.order || 0,
  });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <Modal
      title={content ? "Edit Content" : "Add Content"}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Page *</label>
            <select
              name="page"
              value={form.page}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a page</option>
              <option value="home">Home</option>
              <option value="about">About</option>
              <option value="careers">Careers</option>
              <option value="products">Products</option>
              <option value="contact">Contact</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section *</label>
            <input
              type="text"
              name="section"
              value={form.section}
              onChange={handleChange}
              placeholder="e.g., hero, features, about"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Content title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
          <input
            type="text"
            name="heading"
            value={form.heading}
            onChange={handleChange}
            placeholder="Content heading"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Content description"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
            <input
              type="text"
              name="buttonText"
              value={form.buttonText}
              onChange={handleChange}
              placeholder="Get Started"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Button Link</label>
            <input
              type="url"
              name="buttonLink"
              value={form.buttonLink}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
            <input
              type="number"
              name="order"
              value={form.order}
              onChange={handleChange}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">Active</label>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              content ? "Update" : "Create"
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
}
