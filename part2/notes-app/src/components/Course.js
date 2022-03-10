import react from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total'
const Course = ({course}) => {
    return (
        <div>
            <Header courseID={course.id} courseName={course.name} />
            <Content courseParts={course.parts} />
            <Total courseExcs={course.parts} />
        </div>
    )
}

export default Course