import { useMutation } from "@tanstack/react-query";
import {
  createContactSubmission,
} from "../api/contact.api";

export const useCreateContactSubmission = () => {
  return useMutation({
    mutationFn: createContactSubmission,
    onSuccess: () => {
      console.log("Contact form submitted successfully");
    },
    onError: (error) => {
      console.error("Error submitting contact form:", error);
    },
  });
};
