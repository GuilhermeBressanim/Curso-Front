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
            <Container>
                <p className={styles.sectionTitle}>AULAS JÁ DISPONIVEIS</p>
                <SlideComponent course={newestCourses} />
            </Container>
            <Link href="/register">
                <Button outline color="light" className={styles.SlideSectionBtn}>Se cadastre para acessar!</Button>
            </Link>
        </>
    )
}

export default SlideSection