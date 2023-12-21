
package com.example.service;

import com.example.entity.Profile;
import com.example.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepository profileRepository;

    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    public Optional<Profile> getProfileById(Long id) {
        return profileRepository.findById(id);
    }

    public Profile saveProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    public Profile updateProfile(Long id, Profile updatedProfile) {
        // Assuming you want to update an existing profile
        updatedProfile.setId(id);
        return profileRepository.save(updatedProfile);
    }

    public void deleteProfile(Long id) {
        profileRepository.deleteById(id);
    }
}
