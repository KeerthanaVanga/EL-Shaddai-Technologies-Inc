import { useState } from "react";
import { useToast } from "../ui/Toast";
import { Modal, Field, inputCls, TabHeader, EmptyState } from "./AdminShared";
import {
  useGetAllJobs,
  useCreateJob,
  useUpdateJob,
  useDeleteJob,
  type UpdateJobPayload,
  type CreateJobPayload,
} from "../../hooks/useJobs";
import type { Job } from "../../api/jobs.api";

const JOB_TYPES = ["Full-Time", "Part-Time", "Contract", "Remote", "Hybrid"];

const EMPTY_FORM: CreateJobPayload = {
  title: "",
  description: "",
  location: "",
  type: "Full-Time",
  requirements: "",
  department: "",
  isActive: true,
};

export default function JobsTab() {
  const { toast } = useToast();
  const { data: jobsResponse, isLoading, error } = useGetAllJobs();
  const createJobMutation = useCreateJob();
  const updateJobMutation = useUpdateJob();
  const deleteJobMutation = useDeleteJob();
  
  const jobs = jobsResponse?.data || [];
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [form, setForm] = useState<CreateJobPayload>(EMPTY_FORM);
  const [deleteId, setDeleteId] = useState<string | null>(null);


  const openAdd = () => {
    setEditingJob(null);
    setForm(EMPTY_FORM);
    setShowModal(true);
  };

  const openEdit = (job: Job) => {
    setEditingJob(job);
    setForm({
      title: job.title,
      location: job.location,
      type: job.type,
      description: job.description,
      requirements: job.requirements || "",
      department: job.department || "",
      isActive: job.isActive,
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (
      !form.title?.trim() ||
      !form.location?.trim()
    ) {
      toast(
        "error",
        "Required fields missing",
        "Title and location are required.",
      );
      return;
    }
    
    try {
      if (editingJob) {
        await updateJobMutation.mutateAsync({ id: editingJob.id, payload: form as UpdateJobPayload });
        toast("success", "Job updated successfully!");
      } else {
        await createJobMutation.mutateAsync(form);
        toast("success", "Job added successfully!");
      }
      setShowModal(false);
    } catch (error) {
      toast("error", "Operation failed", error instanceof Error ? error.message : "Unknown error");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteJobMutation.mutateAsync(id);
      toast("success", "Job deleted.");
      setDeleteId(null);
    } catch (error) {
      toast("error", "Delete failed", error instanceof Error ? error.message : "Unknown error");
    }
  };

  const f =
    (field: keyof CreateJobPayload) =>
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
          title="Job Listings"
          subtitle={`${jobs.length} position${jobs.length !== 1 ? "s" : ""} listed`}
          action={
            <button
              onClick={openAdd}
              className="flex items-center gap-2 px-4 py-2 bg-[#0B1426] text-white text-sm font-bold rounded-lg hover:bg-[#15233e] transition-colors whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Job
            </button>
          }
        />

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-sm text-slate-500">Loading jobs...</div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-sm text-red-500">Error loading jobs</div>
          </div>
        ) : jobs.length === 0 ? (
          <EmptyState
            icon={<span className="text-2xl">💼</span>}
            message="No job listings yet."
            action={
              <button
                onClick={openAdd}
                className="px-5 py-2.5 bg-[#0B1426] text-white text-sm font-bold rounded-lg hover:bg-[#15233e] transition-colors"
              >
                Add First Job
              </button>
            }
          />
        ) : (
          <div className="divide-y divide-slate-100">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-5 sm:p-6 hover:bg-slate-50/60 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {job.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wide">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                    {job.requirements && (
                      <p className="text-xs text-slate-400 mt-1.5 line-clamp-1">
                        Skills: {job.requirements}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => openEdit(job)}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200 rounded-md hover:bg-slate-100 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(job.id)}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-500 border border-red-100 rounded-md hover:bg-red-50 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
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
          title={editingJob ? "Edit Job" : "Add Job"}
          onClose={() => setShowModal(false)}
        >
          <div className="space-y-4">
            <Field label="Job Title *">
              <input
                value={form.title}
                onChange={f("title")}
                placeholder="e.g. Java Developer"
                className={inputCls}
              />
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Department">
                <input
                  value={form.department || ""}
                  onChange={f("department")}
                  placeholder="e.g. Engineering"
                  className={inputCls}
                />
              </Field>
              <Field label="Location *">
                <input
                  value={form.location}
                  onChange={f("location")}
                  placeholder="e.g. Hyderabad"
                  className={inputCls}
                />
              </Field>
            </div>
            <Field label="Description">
              <textarea
                value={form.description}
                onChange={f("description")}
                rows={3}
                placeholder="Describe the role and responsibilities..."
                className={`${inputCls} resize-none`}
              />
            </Field>
            <Field label="Requirements / Skills">
              <input
                value={form.requirements || ""}
                onChange={f("requirements")}
                placeholder="e.g. React, Node.js, AWS"
                className={inputCls}
              />
            </Field>
            <Field label="Job Type">
              <select
                value={form.type}
                onChange={f("type")}
                className={inputCls}
              >
                {JOB_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSave}
                disabled={createJobMutation.isPending || updateJobMutation.isPending}
                className="flex-1 py-2.5 bg-[#0B1426] text-white text-sm font-bold rounded-lg hover:bg-[#15233e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {(createJobMutation.isPending || updateJobMutation.isPending) && (
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {editingJob ? "Save Changes" : "Add Job"}
              </button>
              <button
                onClick={() => setShowModal(false)}
                disabled={createJobMutation.isPending || updateJobMutation.isPending}
                className="flex-1 py-2.5 border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}


      {deleteId && (
        <Modal title="Delete Job" onClose={() => setDeleteId(null)}>
          <p className="text-sm text-slate-600 mb-6">
            Are you sure you want to delete this job listing? This action cannot
            be undone.
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
