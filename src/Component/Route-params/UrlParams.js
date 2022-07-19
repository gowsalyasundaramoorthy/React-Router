import { useParams } from "react-router-dom"


export const UrlParams = () => {
    const Params = useParams()
    const userId = Params. userId
  return (
      <div>
          
          Details about user {userId}
    </div>
  )
}