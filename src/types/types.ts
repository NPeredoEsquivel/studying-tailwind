
export type TProject = {
  id: string,
  title: string,
  description: string,
  dueDate: string
}

export type ProjectState = {
  projects: TProject[];
  selectedProjectId?: string | null;
  tasks: TTask[];
}

export type TTask = {
  id: string;
  projectId: string;
  taskName: string;
}