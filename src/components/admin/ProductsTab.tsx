import { useState } from "react";
import { useToast } from "../ui/Toast";
import { Modal, Field, inputCls, TabHeader, EmptyState } from "./AdminShared";
import {
  useGetAllProducts,
  useCreateProduct,
  useUpdateProduct,
  useDeleteProduct,
  type UpdateProductPayload,
  type CreateProductPayload,
} from "../../hooks/useProducts";
import type { Product } from "../../api/products.api";

const EMPTY_FORM: CreateProductPayload = {
  name: "",
  tagline: "",
  description: "",
  features: "",
};

export default function ProductsTab() {
  const { toast } = useToast();
  const { data: productsResponse, isLoading, error } = useGetAllProducts();
  const createProductMutation = useCreateProduct();
  const updateProductMutation = useUpdateProduct();
  const deleteProductMutation = useDeleteProduct();
  
  const products = productsResponse?.data || [];
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form, setForm] = useState<CreateProductPayload>(EMPTY_FORM);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openAdd = () => {
    setEditingProduct(null);
    setForm(EMPTY_FORM);
    setShowModal(true);
  };

  const openEdit = (product: Product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      tagline: product.tagline || "",
      description: product.description,
      features: product.features || "",
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.name.trim() || !form.description.trim()) {
      toast("error", "Required fields missing", "Name and description are required.");
      return;
    }
    
    try {
      if (editingProduct) {
        await updateProductMutation.mutateAsync({ id: editingProduct.id, payload: form as UpdateProductPayload });
        toast("success", "Product updated successfully!");
      } else {
        await createProductMutation.mutateAsync(form);
        toast("success", "Product added successfully!");
      }
      setShowModal(false);
    } catch (error) {
      toast("error", "Operation failed", error instanceof Error ? error.message : "Unknown error");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProductMutation.mutateAsync(id);
      toast("success", "Product deleted.");
      setDeleteId(null);
    } catch (error) {
      toast("error", "Delete failed", error instanceof Error ? error.message : "Unknown error");
    }
  };

  const f =
    (field: keyof CreateProductPayload) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <>
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
        <TabHeader
          title="Products"
          subtitle={`${products.length} product${products.length !== 1 ? "s" : ""} listed`}
          action={
            <button
              onClick={openAdd}
              className="flex items-center gap-2 px-4 py-2 bg-[#0B1426] text-white text-sm font-bold rounded-lg hover:bg-[#15233e] transition-colors whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add Product
            </button>
          }
        />

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-sm text-slate-500">Loading products...</div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-sm text-red-500">Error loading products</div>
          </div>
        ) : products.length === 0 ? (
          <EmptyState
            icon={<span className="text-2xl">📦</span>}
            message="No products listed yet."
            action={
              <button
                onClick={openAdd}
                className="px-5 py-2.5 bg-[#0B1426] text-white text-sm font-bold rounded-lg hover:bg-[#15233e] transition-colors"
              >
                Add First Product
              </button>
            }
          />
        ) : (
          <div className="divide-y divide-slate-100">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-5 sm:p-6 hover:bg-slate-50/60 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-slate-900">{product.name}</h3>
                      {product.tagline && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wide">
                          {product.tagline}
                        </span>
                      )}
                    </div>
                    {product.features && (
                      <p className="text-xs text-slate-400 line-clamp-1">
                        Features: {product.features}
                      </p>
                    )}
                    {product.description && (
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => openEdit(product)}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200 rounded-md hover:bg-slate-100 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(product.id)}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-500 border border-red-100 rounded-md hover:bg-red-50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add / Edit Modal */}
      {showModal && (
        <Modal
          title={editingProduct ? "Edit Product" : "Add Product"}
          onClose={() => setShowModal(false)}
        >
          <div className="space-y-4">
            <Field label="Product Name *">
              <input
                value={form.name}
                onChange={f("name")}
                placeholder="e.g. TalentTrack Pro"
                className={inputCls}
              />
            </Field>
            <Field label="Tagline">
              <input
                value={form.tagline}
                onChange={f("tagline")}
                placeholder="e.g. The future of workforce management"
                className={inputCls}
              />
            </Field>
            <Field label="Description *">
              <textarea
                value={form.description}
                onChange={f("description")}
                rows={4}
                placeholder="Describe the product and its key features..."
                className={`${inputCls} resize-none`}
              />
            </Field>
            <Field label="Features (comma-separated)">
              <input
                value={form.features || ""}
                onChange={f("features")}
                placeholder="e.g. Real-time analytics, AI-powered insights, Cloud-based"
                className={inputCls}
              />
            </Field>
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSave}
                disabled={createProductMutation.isPending || updateProductMutation.isPending}
                className="flex-1 py-2.5 bg-[#0B1426] text-white text-sm font-bold rounded-lg hover:bg-[#15233e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {(createProductMutation.isPending || updateProductMutation.isPending) && (
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {editingProduct ? "Save Changes" : "Add Product"}
              </button>
              <button
                onClick={() => setShowModal(false)}
                disabled={createProductMutation.isPending || updateProductMutation.isPending}
                className="flex-1 py-2.5 border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <Modal title="Delete Product" onClose={() => setDeleteId(null)}>
          <p className="text-sm text-slate-600 mb-6">
            Are you sure you want to delete this product? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => handleDelete(deleteId)}
              className="flex-1 py-2.5 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
            <button
              onClick={() => setDeleteId(null)}
              className="flex-1 py-2.5 border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
