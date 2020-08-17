package com.tez.kariyer.model.entity.address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class District {
    @Id
    private  long id;
}



/*

1 . Analiz ve db (entity) tasarımı
2. Db tasarımı ve servis
3. Front end
4. Test ve hataların giderimi

1. kurulumlar ve Veri seti eğitim videoları
2.  algoritmanın seçimi ve config ayarları ?
3. algoritmanın özelleştirilmesi eğitimi vs
4. test ve hataların giderilmesi

*/