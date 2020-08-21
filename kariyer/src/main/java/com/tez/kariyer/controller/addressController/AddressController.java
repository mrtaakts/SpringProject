package com.tez.kariyer.controller.addressController;

import com.tez.kariyer.model.entity.address.Il;
import com.tez.kariyer.model.entity.address.Ilce;
import com.tez.kariyer.service.addressService.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/address")
public class AddressController {

    @Autowired
    AddressService addressService;

    @PostMapping(value = "/listcity")
    @ResponseBody
    public List<Il> showcities(@RequestBody Integer countryid)
    {

        List<Il> cities= addressService.showcities(countryid);
        return cities;
    }

    @PostMapping(value = "/listdistrict")
    @ResponseBody
    public List<Ilce> showdistricts()
    {

        List<Ilce> ilces = addressService.showdistricts(1);
        return ilces;
    }



}
