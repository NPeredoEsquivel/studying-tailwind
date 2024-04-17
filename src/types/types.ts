
export type TProject = {
  id: string,
  title: string,
  description: string,
  dueDate: string
}

export type ProjectState = {
  projects: TProject[];
  selectedProjectId?: string | null;
}