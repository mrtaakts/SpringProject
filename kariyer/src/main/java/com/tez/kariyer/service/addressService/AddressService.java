package com.tez.kariyer.service.addressService;

import com.tez.kariyer.model.entity.address.Il;
import com.tez.kariyer.model.entity.address.Ilce;
import com.tez.kariyer.model.repository.addressRepository.CityRepository;
import com.tez.kariyer.model.repository.addressRepository.CountryRepository;
import com.tez.kariyer.model.repository.addressRepository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {

    @Autowired
    CountryRepository countryRepository;
    @Autowired
    CityRepository cityRepository;
    @Autowired
    DistrictRepository districtRepository;

    public List<Il> showcities(Integer countryid)
    {
        List<Il> cities= cityRepository.findByUlke(countryid);


        return cities;
    }

    public List<Ilce> showdistricts(Integer cityid)
    {
        List<Ilce> ilces = districtRepository.findByCity_Id(cityid);


        return ilces;
    }

}
