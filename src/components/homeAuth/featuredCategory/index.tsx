import useSWR from "swr"
import styles from "../../../../styles/slideCategory.module.scss"
import courseService from "../../../service/courseService"
import SlideComponent from "../../common/slideComponent"
import PageSpinner from "../../common/spinner"

const FeaturedCategory = function () {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses)

    if (error) return error
    if (!data) {
        return <PageSpinner />
    }


    return (
        <>
            <p className={styles.titleCategory}>EM DESTAQUE</p>
            <SlideComponent course={data.data} />
        </>
    )
}

export default FeaturedCategory