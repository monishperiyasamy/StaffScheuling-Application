package com.example.controller;

import com.example.entity.Shiftswap;
import com.example.service.ShiftswapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/timeoff-requests/shift-swaps/api")
public class ShiftswapController {
    @Autowired
    private ShiftswapService shiftSwapService;

    @GetMapping("/shift-swaps")
    public List<Shiftswap> getAllShiftSwaps() {
        return shiftSwapService.getAllShiftSwaps();
    }

    @GetMapping("/shift-swaps/{id}")
    public Optional<Shiftswap> getShiftSwapById(@PathVariable Long id) {
        return shiftSwapService.getShiftSwapById(id);
    }

    @PostMapping("/shift-swaps")
    public Shiftswap saveShiftSwap(@RequestBody Shiftswap shiftSwap) {
        return shiftSwapService.saveShiftSwap(shiftSwap);
    }

    @PutMapping("/shift-swaps/{id}")
    public Shiftswap updateShiftSwap(@PathVariable Long id, @RequestBody Shiftswap shiftSwap) {
        return shiftSwapService.updateShiftSwap(id, shiftSwap);
    }

    @DeleteMapping("/shift-swaps/{id}")
    public void deleteShiftSwap(@PathVariable Long id) {
        shiftSwapService.deleteShiftSwap(id);
    }
}
