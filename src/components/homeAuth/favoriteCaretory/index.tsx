import useSWR from "swr"
import styles from "../../../../styles/slideCategory.module.scss"
import courseService from "../../../service/courseService"
import SlideComponent from "../../common/slideComponent"
import PageSpinner from "../../common/spinner"

const FavoriteCategory = function () {
    const { data, error } = useSWR("/favorites", courseService.getFavCourses)

    if (error) return error
    if (!data) {
        return <PageSpinner />
    }


    return (
        <>
            <p className={styles.titleCategory}>MINHA LISTA</p>
            {data.data.courses?.length >= 1 ? (
                <SlideComponent course={data.data.courses} />
            ) : (
                <p className="text-center pt-3 h5">
                    <strong>Você não tem nenhum curso na lista</strong>
                </p>
            )}
        </>
    )
}

export default FavoriteCategory