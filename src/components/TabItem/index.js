import {TabListItem, Button} from './styledComponents'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(id)
  }

  const styles = {
    color: isActive ? '#ffffff' : '#db1c48',
    backgroundColor: isActive ? '#db1c48' : '#ffffff',
  }

  return (
    <TabListItem>
      <Button type="button" onClick={onClickTab} style={styles}>
        {buttonText}
      </Button>
    </TabListItem>
  )
}

export default TabItem
