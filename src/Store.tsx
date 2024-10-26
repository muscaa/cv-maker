import * as Config from "@/Config";

import { create } from "zustand";

export interface ProjectStore {
    project: Config.Project | null;

    setProject: (project: Config.Project | null) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
    project: null,

    setProject: (project: Config.Project | null) => set({
        project: project,
    }),
}));
