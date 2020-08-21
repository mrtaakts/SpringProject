package com.tez.kariyer.model.repository.parameterTableRepository;

import com.tez.kariyer.model.entity.parameterTable.CompanySector;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanySectorRepository extends CrudRepository<CompanySector, Integer> {

    CompanySector findByCompanySector(String CompanySector);
}
