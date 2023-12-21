package com.example.service;

import com.example.entity.Shiftswap;
import com.example.repository.ShiftswapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShiftswapService {
    @Autowired
    private ShiftswapRepository shiftSwapRepository;

    public List<Shiftswap> getAllShiftSwaps() {
        return shiftSwapRepository.findAll();
    }

    public Optional<Shiftswap> getShiftSwapById(Long id) {
        return shiftSwapRepository.findById(id);
    }

    public Shiftswap saveShiftSwap(Shiftswap shiftSwap) {
        return shiftSwapRepository.save(shiftSwap);
    }

    public Shiftswap updateShiftSwap(Long id, Shiftswap shiftSwap) {
        shiftSwap.setId(id);
        return shiftSwapRepository.save(shiftSwap);
    }

    public void deleteShiftSwap(Long id) {
        shiftSwapRepository.deleteById(id);
    }
}
