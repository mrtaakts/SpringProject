package com.tez.kariyer.model.repository;

import com.tez.kariyer.model.entity.WayOfWork;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WayOfWorkRepository extends CrudRepository<WayOfWork,Integer> {
}
