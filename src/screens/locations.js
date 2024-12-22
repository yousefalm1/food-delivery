import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const Locations = () => {
  const navigation = useNavigation();

  const [locations, setLocations] = useState([
    {
      id: 1,
      title: 'Home',
      address: 'Block 4, Street 5, House 23, Jabriya',
      type: 'home',
      isDefault: true,
    },
    {
      id: 2,
      title: 'Work',
      address: 'Kuwait City, Al Hamra Tower, Floor 15',
      type: 'work',
      isDefault: false,
    },
    {
      id: 3,
      title: 'Gym',
      address: 'Salmiya, Block 12, Street 7',
      type: 'other',
      isDefault: false,
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newLocation, setNewLocation] = useState({
    title: '',
    address: '',
    type: 'home',
    isDefault: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingLocation, setEditingLocation] = useState(null);

  const addLocation = () => {
    if (newLocation.title && newLocation.address) {
      const updatedLocations = newLocation.isDefault
        ? locations.map((loc) => ({
            ...loc,
            isDefault: false,
          }))
        : [...locations];

      setLocations([
        ...updatedLocations,
        {
          id: locations.length + 1,
          ...newLocation,
        },
      ]);
      setNewLocation({
        title: '',
        address: '',
        type: 'home',
        isDefault: false,
      });
      setIsModalVisible(false);
    }
  };

  const toggleDefaultLocation = (locationId) => {
    setLocations(
      locations.map((loc) => ({
        ...loc,
        isDefault: loc.id === locationId ? true : false,
      }))
    );
  };

  const handleEdit = (location) => {
    setIsEditing(true);
    setEditingLocation(location);
    setNewLocation({
      title: location.title,
      address: location.address,
      type: location.type,
      isDefault: location.isDefault,
    });
    setIsModalVisible(true);
  };

  const LocationCard = ({ location }) => (
    <TouchableOpacity
      style={[styles.locationCard, location.isDefault && styles.defaultCard]}
      onPress={() => toggleDefaultLocation(location.id)}
      activeOpacity={0.7}
    >
      <View style={styles.cardContent}>
        <View style={styles.iconWrapper}>
          <Icon
            name={
              location.type === 'home'
                ? 'home'
                : location.type === 'work'
                ? 'business'
                : 'place'
            }
            size={22}
            color="#FE5320"
          />
        </View>

        <View style={styles.locationInfo}>
          <View style={styles.titleRow}>
            <Text style={styles.locationTitle}>{location.title}</Text>
            {location.isDefault && (
              <View style={styles.defaultBadge}>
                <Icon name="check-circle" size={12} color="#4CAF50" />
                <Text style={styles.defaultText}>Default</Text>
              </View>
            )}
          </View>
          <Text style={styles.locationAddress}>{location.address}</Text>
        </View>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEdit(location)}
        >
          <Icon name="edit" size={18} color="#666" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const handleSave = () => {
    if (newLocation.title && newLocation.address) {
      if (isEditing && editingLocation) {
        // Update existing location
        const updatedLocations = locations.map((loc) => {
          if (loc.id === editingLocation.id) {
            return {
              ...loc,
              ...newLocation,
            };
          }
          // If new location is default, remove default from others
          if (newLocation.isDefault && loc.id !== editingLocation.id) {
            return {
              ...loc,
              isDefault: false,
            };
          }
          return loc;
        });
        setLocations(updatedLocations);
      } else {
        // Add new location
        const updatedLocations = newLocation.isDefault
          ? locations.map((loc) => ({
              ...loc,
              isDefault: false,
            }))
          : [...locations];

        setLocations([
          ...updatedLocations,
          {
            id: locations.length + 1,
            ...newLocation,
          },
        ]);
      }

      // Reset form and close modal
      setNewLocation({
        title: '',
        address: '',
        type: 'home',
        isDefault: false,
      });
      setIsEditing(false);
      setEditingLocation(null);
      setIsModalVisible(false);
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View
            style={{
              position: 'absolute',
              top: 65,
              left: 20,
              zIndex: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.buttonStyle}
            >
              <ChevronLeft size={20} color="#FE5320" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContent}>
            <Icon name="location-on" size={48} color="#FE5320" />
            <Text style={styles.headerTitle}>My Locations</Text>
            <Text style={styles.headerSubtitle}>
              Manage your delivery addresses
            </Text>
          </View>
        </View>

        {/* Locations List */}
        <View style={styles.locationsContainer}>
          <Text style={styles.sectionTitle}>Saved Locations</Text>
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </View>

        {/* Add New Location Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsModalVisible(true)}
        >
          <View style={styles.addButtonContent}>
            <Icon name="add-location" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Add New Location</Text>
            <Icon name="chevron-right" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <View
            style={styles.modalContent}
            onStartShouldSetResponder={() => true}
          >
            {/* Drag Indicator */}
            <View style={styles.dragIndicator} />

            {/* Enhanced Header */}
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setIsModalVisible(false);
                  setIsEditing(false);
                  setEditingLocation(null);
                  setNewLocation({
                    title: '',
                    address: '',
                    type: 'home',
                    isDefault: false,
                  });
                }}
                accessibilityLabel="Close modal"
              >
                <Icon name="arrow-back" size={24} color="#888" />
              </TouchableOpacity>
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>
                  {isEditing ? 'Edit Location' : 'Add New Location'}
                </Text>
                <Text style={styles.headerSubtitle}>
                  {isEditing
                    ? 'Update delivery address details'
                    : 'Enter delivery address details'}
                </Text>
              </View>
            </View>

            <ScrollView
              style={styles.formContainer}
              showsVerticalScrollIndicator={false}
            >
              {/* Location Type Selection */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Location Type</Text>
                <View style={styles.typeContainer}>
                  {['home', 'work', 'other'].map((type) => (
                    <TouchableOpacity
                      key={type}
                      style={[
                        styles.typeOption,
                        newLocation.type === type && styles.activeType,
                      ]}
                      onPress={() => setNewLocation({ ...newLocation, type })}
                      accessibilityLabel={`Select ${type} location type`}
                      accessibilityState={{
                        selected: newLocation.type === type,
                      }}
                    >
                      <Icon
                        name={
                          type === 'home'
                            ? 'home'
                            : type === 'work'
                            ? 'business'
                            : 'place'
                        }
                        size={20}
                        color={newLocation.type === type ? '#FFF' : '#666'}
                      />
                      <Text
                        style={[
                          styles.typeText,
                          newLocation.type === type && styles.activeTypeText,
                        ]}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Location Name</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter a name for this location"
                    placeholderTextColor="#666"
                    value={newLocation.title}
                    onChangeText={(text) =>
                      setNewLocation({ ...newLocation, title: text })
                    }
                    returnKeyType="next"
                    accessibilityLabel="Location name input"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Full Address</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={[styles.input, styles.addressInput]}
                    placeholder="Enter the complete address"
                    placeholderTextColor="#666"
                    multiline
                    numberOfLines={3}
                    value={newLocation.address}
                    onChangeText={(text) =>
                      setNewLocation({ ...newLocation, address: text })
                    }
                    accessibilityLabel="Address input"
                  />
                </View>
              </View>

              {/* Default Location Toggle */}
              <View style={styles.defaultToggleContainer}>
                <View style={styles.defaultToggleText}>
                  <Text style={styles.defaultToggleTitle}>
                    Set as Default Address
                  </Text>
                  <Text style={styles.defaultToggleSubtitle}>
                    This will be selected by default when ordering
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    styles.defaultToggle,
                    newLocation.isDefault && styles.defaultToggleActive,
                  ]}
                  onPress={() =>
                    setNewLocation({
                      ...newLocation,
                      isDefault: !newLocation.isDefault,
                    })
                  }
                  accessibilityLabel="Set as default address"
                  accessibilityRole="switch"
                  accessibilityState={{ checked: newLocation.isDefault }}
                >
                  <View
                    style={[
                      styles.defaultToggleHandle,
                      newLocation.isDefault && styles.defaultToggleHandleActive,
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* Action Buttons */}
            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.saveButton,
                  (!newLocation.title || !newLocation.address) &&
                    styles.saveButtonDisabled,
                ]}
                onPress={handleSave}
                disabled={!newLocation.title || !newLocation.address}
              >
                <Text style={styles.saveButtonText}>
                  {isEditing ? 'Update Location' : 'Save Location'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  headerContainer: {
    backgroundColor: '#1A1A1A',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingVertical: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    paddingTop: 80,
    paddingBottom: 35,
  },
  buttonStyle: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(254, 83, 32, 0.1)',
  },
  headerContent: {
    alignItems: 'center',
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888888',
    letterSpacing: 1,
  },
  locationsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginBottom: 16,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    opacity: 0.9,
  },
  locationCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#242424',
  },
  defaultCard: {
    borderColor: 'rgba(254, 83, 32, 0.3)',
    backgroundColor: 'rgba(254, 83, 32, 0.03)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationInfo: {
    flex: 1,
    marginLeft: 14,
    marginRight: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginRight: 8,
  },
  locationAddress: {
    fontSize: 13,
    color: '#888888',
    lineHeight: 18,
  },
  defaultBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  defaultText: {
    fontSize: 12,
    color: '#4CAF50',
    marginLeft: 4,
    fontFamily: 'Poppins-Medium',
  },
  editButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(102, 102, 102, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    padding: 20,
    paddingBottom: 30,
  },
  addButtonContent: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#242424',
  },
  addButtonText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#161616',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '85%',
  },
  dragIndicator: {
    width: 36,
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#242424',
    gap: 16,
  },
  closeButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#1A1A1A',
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  formContainer: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
  },
  inputWrapper: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#242424',
  },
  input: {
    color: '#FFFFFF',
    fontSize: 15,
    padding: 16,
  },
  addressInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  typeContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  typeOption: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeType: {
    backgroundColor: '#FE5320',
    borderColor: '#FE5320',
  },
  typeText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTypeText: {
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    gap: 12,
    padding: 20,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#242424',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#242424',
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#FE5320',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: '#FE532080',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  defaultToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#242424',
  },
  defaultToggleText: {
    flex: 1,
    marginRight: 16,
  },
  defaultToggleTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  defaultToggleSubtitle: {
    fontSize: 13,
    color: '#888',
  },
  defaultToggle: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#242424',
    padding: 2,
  },
  defaultToggleActive: {
    backgroundColor: '#FE5320',
  },
  defaultToggleHandle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#666',
    transform: [{ translateX: 0 }],
  },
  defaultToggleHandleActive: {
    backgroundColor: '#FFFFFF',
    transform: [{ translateX: 20 }],
  },
});

export default Locations;
