import { track } from "@vercel/analytics";

export const analytics = {
  trackCVDownload: (locale: string) => {
    track("cv_download", { locale });
  },

  trackProjectClick: (projectId: string, locale: string) => {
    track("project_click", { projectId, locale });
  },

  trackFormSubmit: (locale: string) => {
    track("form_submit", { locale });
  },
};
