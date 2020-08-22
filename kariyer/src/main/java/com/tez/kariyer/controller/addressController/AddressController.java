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

    @RequestMapping(value = "/listcity/{id}", method = RequestMethod.GET)
    @ResponseBody
    public List<Il> showcities(@PathVariable Integer countryid)
    {

        List<Il> cities= addressService.showcities(countryid);
        return cities;
    }

    @RequestMapping(value = "/listdistrict/{id}", method = RequestMethod.GET)
    @ResponseBody
    public List<Ilce> showdistricts(@PathVariable int id)
    {

        List<Ilce> ilces = addressService.showdistricts(id);
        return ilces;
    }



}
