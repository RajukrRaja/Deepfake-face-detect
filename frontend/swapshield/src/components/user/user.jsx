import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './user.css';

const UserProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    jobTitle: '',
    institution: '',
    avatarUrl: '',
    oldPassword: '',
    newPassword: '',
  });
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false); 
  const token = localStorage.getItem('token') || '';

  // Handle input change for form data
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fetch user profile from API
  const getUserProfile = async () => {
    if (!token) {
      setMessage('No token available');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/user/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data) {
        setUser(res.data);
        setMessage('Profile loaded successfully');
      } else {
        setMessage('No user data found');
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      setMessage(error.response?.data?.message || 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  // Update user profile with edited data
  const editUserProfile = async () => {
    try {
      const res = await axios.put(
        'http://localhost:5000/api/user/profile',
        {
          fullName: formData.fullName,
          location: formData.location,
          jobTitle: formData.jobTitle,
          institution: formData.institution,
          avatarUrl: formData.avatarUrl,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.data.user) {
        setUser(res.data.user);
        setMessage('Profile updated successfully');
        setIsEditing(false);
        setFormData({ ...formData, fullName: '', location: '', jobTitle: '', institution: '', avatarUrl: '' });
      } else {
        setMessage('Profile update returned no user data');
      }
    } catch (error) {
      console.error('Profile update error:', error);
      setMessage(error.response?.data?.message || 'Profile update failed');
    }
  };

  // Change user password
  const changePassword = async () => {
    try {
      const res = await axios.put(
        'http://localhost:5000/api/user/change-password',
        {
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage(res.data.message);
      setFormData({ ...formData, oldPassword: '', newPassword: '' });
    } catch (error) {
      console.error('Password change error:', error);
      setMessage(error.response?.data?.message || 'Password change failed');
    }
  };

  // Load user profile when component mounts
  useEffect(() => {
    if (token) {
      getUserProfile();
    } else {
      setMessage('Please log in to view your profile.');
    }
  }, [token]);

  // Render component
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>{message}</p>

      {loading ? (
        <p>Loading user profile...</p>
      ) : (
        <>
          {user ? (
            <>
              {/* Profile Details */}
              <div className="profile-details">
                <h3>Profile Details</h3>
                <div className="profile-info">
                  <p><strong>Name:</strong> {user.fullName}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Location:</strong> {user.location}</p>
                  <p><strong>Job Title:</strong> {user.jobTitle}</p>
                  <p><strong>Institution:</strong> {user.institution}</p>
                  {user.avatarUrl && <img src={user.avatarUrl} alt="Avatar" />}
                </div>
                <button onClick={() => setIsEditing(true)}>Edit Profile</button>
              </div>

              {/* Edit Profile Form */}
              {isEditing && (
                <div className="edit-profile">
                  <h3>Edit Profile</h3>
                  <input
                    name="fullName"
                    placeholder="Full Name"
                    defaultValue={user.fullName}
                    onChange={handleInputChange}
                  />
                  <input
                    name="location"
                    placeholder="Location"
                    defaultValue={user.location}
                    onChange={handleInputChange}
                  />
                  <input
                    name="jobTitle"
                    placeholder="Job Title"
                    defaultValue={user.jobTitle}
                    onChange={handleInputChange}
                  />
                  <input
                    name="institution"
                    placeholder="Institution"
                    defaultValue={user.institution}
                    onChange={handleInputChange}
                  />
                  <input
                    name="avatarUrl"
                    placeholder="Avatar URL"
                    defaultValue={user.avatarUrl}
                    onChange={handleInputChange}
                  />
                  <button onClick={editUserProfile}>Save Changes</button>
                  <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              )}

              {/* Change Password Form */}
              <div className="change-password">
                <h3>Change Password</h3>
                <input
                  name="oldPassword"
                  type="password"
                  placeholder="Old Password"
                  onChange={handleInputChange}
                />
                <input
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                  onChange={handleInputChange}
                />
                <button onClick={changePassword}>Change Password</button>
              </div>
            </>
          ) : (
            <p>No user data found</p>
          )}
        </>
      )}
    </div>
  );
};

export default UserProfile;
