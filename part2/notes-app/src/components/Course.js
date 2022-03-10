import react from 'react';
import Header from './Header';
import Content from './Content';
const Course = ({course}) => {
    return (
        <div>
            <Header courseID={course.id} courseName={course.name} />
            <Content courseParts={course.parts} />
        </div>
    )
}

export default Course