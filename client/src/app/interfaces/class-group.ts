import { Collaborator } from '../pages/all-collabs/collaborator';

export interface ClassGroup {
    classroom: String
    collaborators: Array<Collaborator>
    course: String
    id: Number
    semester: String
    teacher: String
    time: String
    title: String
    year: Number
}
