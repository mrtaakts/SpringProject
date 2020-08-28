package com.tez.kariyer.model.repository.parameterTableRepository;

import com.tez.kariyer.model.entity.parameterTable.CompanySector;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanySectorRepository extends CrudRepository<CompanySector, Integer> {

    CompanySector findByCompanySector(String CompanySector);

    @Query("select company from CompanySector company where company.id=:id")
    CompanySector findByIdd(@Param("id") Integer id);

}
