<View
style={{
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 5,
}}
>
{/* Back Button */}
<TouchableOpacity
  onPress={() => navigation.goBack()}
  style={styles.buttonStyle}
>
  <ChevronLeft size={20} color={'white'} />
</TouchableOpacity>

{/* Cart Button */}
<TouchableOpacity
  onPress={() =>
    navigation.navigate('TabNavigator', { screen: ROUTE.HOME.CART })
  }
  style={styles.buttonStyle}
>
  <ShoppingCart size={20} color="#fff" strokeWidth={2} />
  {cart.length > 0 && (
    <View
      style={{
        position: 'absolute',
        right: -6,
        top: -6,
        backgroundColor: '#161616',
        borderRadius: 12,
        minWidth: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#ff5f1f',
      }}
    >
      <Text
        style={{ color: '#ff5f1f', fontSize: 10, fontWeight: 'bold' }}
      >
        {cart.length}
      </Text>
    </View>
  )}
</TouchableOpacity>
</View>

<View
style={{
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 5,
}}
>
{/* Back Button */}
<TouchableOpacity
  onPress={() => navigation.goBack()}
  style={styles.buttonStyle}
>
  <ChevronLeft size={20} color={'#ff5f1f'} />
</TouchableOpacity>

{/* Cart Button */}
<TouchableOpacity
  onPress={() =>
    navigation.navigate('TabNavigator', { screen: ROUTE.HOME.CART })
  }
  style={styles.buttonStyle}
>
  <ShoppingCart size={20} color="#ff5f1f" strokeWidth={2} />
  {cart.length > 0 && (
    <View
      style={{
        position: 'absolute',
        right: -6,
        top: -6,
        backgroundColor: '#ff5f1f',
        borderRadius: 12,
        minWidth: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#161616',
      }}
    >
      <Text
        style={{ color: '#161616', fontSize: 10, fontWeight: 'bold' }}
      >
        {cart.length}
      </Text>
    </View>
  )}
</TouchableOpacity>
</View>

<View
style={{
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 5,
}}
>
{/* Back Button */}
<TouchableOpacity
  onPress={() => navigation.goBack()}
  style={styles.buttonStyle}
>
  <ChevronLeft size={20} color="#FE5320" />
</TouchableOpacity>

{/* Cart Button */}
<TouchableOpacity
  onPress={() =>
    navigation.navigate('TabNavigator', { screen: ROUTE.HOME.CART })
  }
  style={styles.buttonStyle}
>
  <ShoppingCart size={20} color="#FE5320" strokeWidth={2} />
  {cart.length > 0 && (
    <View
      style={{
        position: 'absolute',
        right: -6,
        top: -6,
        backgroundColor: '#FE5320',
        borderRadius: 12,
        minWidth: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#161616',
      }}
    >
      <Text
        style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}
      >
        {cart.length}
      </Text>
    </View>
  )}
</TouchableOpacity>
</View>

<View
style={{
  marginTop: 15,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 5,
}}
>
{/* Back Button */}
<TouchableOpacity
  onPress={() => navigation.goBack()}
  style={[styles.buttonStyle, { backgroundColor: '#FE5320' }]}
>
  <ChevronLeft size={20} color="#fff" />
</TouchableOpacity>

{/* Cart Button */}
<TouchableOpacity
  onPress={() =>
    navigation.navigate('TabNavigator', { screen: ROUTE.HOME.CART })
  }
  style={[styles.buttonStyle, { backgroundColor: '#FE5320' }]}
>
  <ShoppingCart size={20} color="#fff" strokeWidth={2} />
  {cart?.length > 0 && (
    <View
      style={{
        position: 'absolute',
        right: -6,
        top: -6,
        backgroundColor: '#fff',
        borderRadius: 12,
        minWidth: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#161616',
      }}
    >
      <Text
        style={{ color: '#161616', fontSize: 10, fontWeight: 'bold' }}
      >
        {cart.length}
      </Text>
    </View>
  )}
</TouchableOpacity>
</View>