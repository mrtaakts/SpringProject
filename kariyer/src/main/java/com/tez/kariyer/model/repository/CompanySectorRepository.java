package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.CompanySector;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanySectorRepository extends CrudRepository<CompanySector, Integer> {
}
