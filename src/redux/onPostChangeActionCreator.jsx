const onPostChangeActionCreator = (text) => {
    return {
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text
    }
  }

  export default onPostChangeActionCreator;