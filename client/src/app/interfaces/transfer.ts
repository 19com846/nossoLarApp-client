import { ClassGroup } from 'src/app/interfaces/class-group';
import { Student } from '../interfaces/student';


export interface Transfer {
    id: number
    enrollment: {
        id: string
        status: string
        student: Array<Student>
        class_group: Array<ClassGroup>
        active: string
        finalGrade: string
        graduated: boolean
    }
        target_group: Array<ClassGroup>
        status: string
        check: boolean
}