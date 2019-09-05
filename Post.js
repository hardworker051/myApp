<FlatList
          data={this.props.data}
          renderItem={this._rednerItem}
          keyExtractor={(item, index) => index.toString()}
/>

_rednerItem=({item}) => {
    return(
        <View>
            <Text>
                {item.Id}
            </Text>
            <Text>
                {item.Sname}
            </Text>
        </View>
    )
}