package com.tez.kariyer.service.addressService;

import com.tez.kariyer.model.entity.address.City;
import com.tez.kariyer.model.entity.address.Country;
import com.tez.kariyer.model.entity.address.District;
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

    public List<City> showcities(Integer countryid)
    {
        List<City> cities= cityRepository.findByCountryId(countryid);


        return cities;
    }

    public List<District> showdistricts(Integer cityid)
    {
        List<District>districts= districtRepository.findByCity_Id(cityid);


        return districts;
    }

}
