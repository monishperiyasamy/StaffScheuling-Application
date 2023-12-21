// ProfileController.java
package com.example.controller;

import com.example.entity.Profile;
import com.example.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/timeoff-requests/profiles/api")
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @GetMapping("/profiles")
    public List<Profile> getAllProfiles() {
        return profileService.getAllProfiles();
    }

    @GetMapping("/profiles/{id}")
    public Optional<Profile> getProfileById(@PathVariable Long id) {
        return profileService.getProfileById(id);
    }

    @PostMapping("/profiles")
    public Profile saveProfile(@RequestBody Profile profile) {
        return profileService.saveProfile(profile);
    }

    @PutMapping("/profiles/{id}")
    public Profile updateProfile(@PathVariable Long id, @RequestBody Profile updatedProfile) {
        return profileService.updateProfile(id, updatedProfile);
    }

    @DeleteMapping("/profiles/{id}")
    public void deleteProfile(@PathVariable Long id) {
        profileService.deleteProfile(id);
    }
}
