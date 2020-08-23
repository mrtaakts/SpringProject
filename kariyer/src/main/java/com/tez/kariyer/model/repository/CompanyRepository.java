package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.Company;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends CrudRepository<Company,Integer> {

    @Query("select company from Company company where company.id=:id")
    Company findByIdd(@Param("id")Integer id);

    @Query("select company from Company company where company.user.id=:id ")
    Company findByUser(@Param("id") Integer userId);

}
