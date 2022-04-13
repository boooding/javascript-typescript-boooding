/**
 *  classroom
 */

class Studio {

    constructor(id, type, students) {
        this.id = id;
        this.type = type;
        this.students = students;
    }

    addStudent(newStudent) {
        this.students.push[newStudent]
    }

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.students.length) {
                    return {
                        done: false,
                        value: this.students[index++],
                    };
                } else {
                    return {
                        done: true,
                        value: undefined,
                    }
                }
            },
            return: () => {
                console.log('iteration stop');
                return { done: true, value: undefined }
            }
        }
    }
}
