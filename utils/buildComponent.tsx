import { CtaBanner } from 'components/CtaBanner'
import { Fastlink } from 'components/Fastlink'
import { FeaturedItems } from 'components/FeaturedItems'
import { FeaturedText } from 'components/FeaturedText'
import { MainHero } from 'components/MainHero'
import { MediaModule } from 'components/MediaModule'
import { Quote } from 'components/Quote'

const componentsMap = {
  MainHero,
  Quote,
  FeaturedItems,
  MediaModule,
  CtaBanner,
  FeaturedText,
  Fastlink
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
