import { DualGrid } from 'components/DualGrid'
import { Fastlink } from 'components/Fastlink'
import { MainHero } from 'components/MainHero'
import { MediaModul } from 'components/MediaModul'
import { Quote } from 'components/Quote'
import { Video } from 'components/Video'

const componentsMap = {
  MainHero,
  DualGrid,
  Quote,
  Fastlink,
  Video,
  MediaModul
}

export const buildComponent = ({ _type, ...props }) => {
  if (!_type) {
    throw new Error('Object does not have a "_type" property')
  }

  const Component = componentsMap[_type]
  if (!Component) {
    throw new Error(`No component is registered for type:'${_type}`)
  }
  return <Component key={props._key} {...props} />
}
