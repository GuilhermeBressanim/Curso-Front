import styles from "./styles.module.scss"
import { EpisodeType } from "../../service/courseService"

interface props {
    episode: EpisodeType
}

const EpisodeList = function ({ episode }: props) {
    const handleSecondsToMin = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60)

        const seconds = totalSeconds % 60

        function toString(num: number) {
            return num.toString().padStart(2, "0")
        }

        const result = `${toString(minutes)}:${toString(seconds)}`

        return result
    }

    return (
        <>
            <div className={styles.episodeCard}>
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