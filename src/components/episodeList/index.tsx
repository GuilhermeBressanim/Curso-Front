import styles from "./styles.module.scss"
import { CourseType, EpisodeType } from "../../service/courseService"
import { useRouter } from "next/router"

interface props {
    episode: EpisodeType
    course: CourseType
}

const EpisodeList = function ({ episode, course }: props) {
    const router = useRouter()

    const handleSecondsToMin = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60)

        const seconds = totalSeconds % 60

        function toString(num: number) {
            return num.toString().padStart(2, "0")
        }

        const result = `${toString(minutes)}:${toString(seconds)}`

        return result
    }

    const handleEpisodePlayer = () => {
        router.push(`/course/episode/${episode.order - 1}?courseid=${course.id}`)
    }

    return (
        <>
            <div className={styles.episodeCard} onClick={handleEpisodePlayer}>
                <div className={styles.episodeOrderTime}>
                    <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
                    <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
                </div>
                <div className={styles.episodeTitleDescription}>
                    <p className={styles.episodeTitle}>{episode.name}</p>
                    <p className={styles.episodeDescription}>
                        {episode.synopsis} Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque expedita, nihil in similique a modi dolor pariatur laboriosam numquam deserunt illo id hic dolore dignissimos incidunt. Deleniti unde aliquid quas, sed inventore, porro culpa commodi quis laboriosam magnam et, cum cumque voluptas minus voluptates! Beatae dolorum eos qui ipsum explicabo.</p>
                </div>
            </div>
        </>
    )
}

export default EpisodeList