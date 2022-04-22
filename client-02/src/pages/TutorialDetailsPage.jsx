import { useParams } from 'react-router-dom'
import TutorialDetails from '../components/tutorial/TutorialDetails'
import { useComments } from '../hooks/useComments'
import { useTutorial } from '../hooks/useTutorial'
import { PUBLIC_IMAGES_BASE_URL } from '../utils/constants'

const TutorialDetailsPage = () => {
    const { tutorialId } = useParams()

    const { data } = useTutorial(tutorialId)
    const { data: commentsData } = useComments(tutorialId)

    console.log({ data, commentsData })
    const tutorial = data?.data?.data?.tutorial || {}
    const comments = commentsData?.data?.data?.comments.docs || []

    return (
        <>
            <TutorialDetails
                tutorialId={tutorialId}
                title={tutorial?.title}
                author={tutorial?.author}
                createdAt={tutorial?.createdAt}
                image={`${PUBLIC_IMAGES_BASE_URL}${tutorial?.image}`}
                content={tutorial?.content}
                comments={comments}
            />
        </>
    )
}

export default TutorialDetailsPage
