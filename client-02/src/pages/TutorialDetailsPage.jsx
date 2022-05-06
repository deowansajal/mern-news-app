import { useParams } from 'react-router-dom'
import TutorialDetails from '../components/tutorial/TutorialDetails'
import { useComments } from '../hooks/useComments'
import { useTutorial } from '../hooks/useTutorial'

const TutorialDetailsPage = () => {
    const { tutorialId } = useParams()

    const { data } = useTutorial(tutorialId)
    const { data: commentsData } = useComments(tutorialId)

    const tutorial = data?.data?.data?.tutorial || {}
    const comments = commentsData?.data?.data?.comments.docs || []

    return (
        <TutorialDetails
            tutorialId={tutorialId}
            title={tutorial?.title}
            author={tutorial?.author}
            createdAt={tutorial?.createdAt}
            image={tutorial?.image}
            content={tutorial?.content}
            comments={comments}
        />
    )
}

export default TutorialDetailsPage
