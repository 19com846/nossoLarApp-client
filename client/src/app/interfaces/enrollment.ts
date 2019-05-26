import { ClassGroup } from './class-group';

export interface Enrollment {
    active: Boolean
    class_group: ClassGroup
    finalGrade: String
    graduated: Boolean
    id: Number
    status: String
}
