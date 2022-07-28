import CustomClasses from './components/CustomClasses/CustomClasses'
import HeaderCustom from './components/HeaderCustom/HeaderCustom'
import FooterCustom from './components/FooterCustom/FooterCustom'
import TitleCustom from './components/TitleCustom/TitleCustom'
import TextCustom from './components/TextCustom/TextCustom'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Select from './components/Select/Select'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Image from './components/Image/Image'
import Main from './components/Main/Main'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Select Component Mapping
MapTo('vue/components/select')(Select, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// HeaderCustom Component Mapping
MapTo('vue/components/header-custom')(HeaderCustom, EditConfig)

// Main Component Mapping
MapTo('vue/components/main')(Main, EditConfig)

// Footer Component Mapping
MapTo('vue/components/footer')(Footer, EditConfig)

// FooterCustom Component Mapping
MapTo('vue/components/footer-custom')(FooterCustom, EditConfig)

// TitleCustom Component Mapping
MapTo('vue/components/title-custom')(TitleCustom, EditConfig)

// TextCustom Component Mapping
MapTo('vue/components/text-custom')(TextCustom, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)
