import Link from "next/link"
import { Button, Container } from "reactstrap"
import { CourseType } from "../../../service/courseService"
import SlideComponent from "../../common/slideComponent"
import styles from "./styles.module.scss"

interface props {
    newestCourses: CourseType[]
}


const SlideSection = function ({ newestCourses }: props) {
    return (
        <>
            <Container className="d-flex flex-column align-items-center py-5">
                <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
                <SlideComponent course={newestCourses} />
                <Link href="/register">
                    <Button outline color="light" className={styles.SlideSectionBtn}>Se cadastre para acessar!</Button>
                </Link>
            </Container>
        </>
    )
}

export default SlideSection