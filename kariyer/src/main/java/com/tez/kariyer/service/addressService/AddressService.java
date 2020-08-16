package com.tez.kariyer.service.addressService;

import com.tez.kariyer.model.repository.addressRepository.CityRepository;
import com.tez.kariyer.model.repository.addressRepository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {
    @Autowired
    CountryRepository countryRepository;
    @Autowired
    CityRepository cityRepository;


}
