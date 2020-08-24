package com.tez.kariyer.model.repository.addressRepository;

import com.tez.kariyer.model.entity.address.Ulke;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends CrudRepository<Ulke,Integer> {

    @Query("select ulke from Ulke ulke where ulke.id=:id")
    Ulke findByIdd(@Param("id") Integer id);
}
