import LandingLayout from '../../components/layouts/Landing'
import MemberTemplate from '../../components/templates/MemberPost'
import TeamDetailData from '../../domain/TeamDetailData'

const TeamDetailPage = ({ member, search, relatedPosts }) => {

    return (
        <MemberTemplate
            member={member}
            search={search}
            relatedPosts={relatedPosts}
        />
    )
}

export async function getStaticPaths({ locales }) {
    return {
        paths: await TeamDetailData.getPaths(locales),
        fallback: false
    }
}

export async function getStaticProps({ locale, params }) {
    const props = await TeamDetailData.getProperties(locale, params)
    return {
      props: {
        title: props.member.title,
        description: props.member.description,
        ...props
      }
    }
}
  
TeamDetailPage.layout = LandingLayout

export default TeamDetailPage
