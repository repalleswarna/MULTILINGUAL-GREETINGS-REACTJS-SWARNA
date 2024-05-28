import {Component} from 'react'
import TabItem from '../TabItem'
import {
  AppContainer,
  ResponsiveContainer,
  AppHeading,
  TabsList,
  GreetingImage,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  setActiveTabId = id => {
    this.setState({activeTabId: id})
  }

  getActiveTabGreeting = () => {
    const {activeTabId} = this.state
    const result = languageGreetingsList.find(
      eachItem => eachItem.id === activeTabId,
    )
    return result
  }

  render() {
    const {activeTabId} = this.state
    const {imageUrl, imageAltText} = this.getActiveTabGreeting()
    return (
      <AppContainer>
        <ResponsiveContainer>
          <AppHeading>Multilingual Greetings</AppHeading>
          <TabsList>
            {languageGreetingsList.map(eachTab => (
              <TabItem
                key={eachTab.id}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.id}
              />
            ))}
          </TabsList>
          <GreetingImage src={imageUrl} alt={imageAltText} />
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default MultilingualGreetings
