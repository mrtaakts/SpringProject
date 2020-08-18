package com.tez.kariyer.controller.addressController;

import com.tez.kariyer.model.entity.address.City;
import com.tez.kariyer.model.entity.address.District;
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
    public List<City> showcities(@RequestBody Integer countryid)
    {

        List<City> cities= addressService.showcities(countryid);
        return cities;
    }

    @PostMapping(value = "/listdistrict")
    @ResponseBody
    public List<District> showdistricts()
    {

        List<District> districts= addressService.showdistricts(1);
        return districts;
    }



}
