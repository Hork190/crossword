/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './styles.module.scss';

const Test: React.FC<any> = (): JSX.Element => {
    const arrNameZ = ["Fedy", "Pettea", "Vasya", "Zhenya", "Sveta"]
    const arrSurnameZ = ["Pupkin", "Zaplupkin", "Vonov", "Ivanov", "Ivanova"]

    const arrName = ["maru", "lesha", "ibra", "sasha", "masha"]
    const arrSurname = ["pushkina", "pushkin", "guseynov", "kuznetsov", "skalkina"]
    const arrHomecity = ["moscow", "tver", "baku", "kiev", "harkov"]
    const arrAge = ["21", "25", "27", "26", "22"]
    const arrObject = [
        {
            gender: 'female',
            height: 160,
            weight: 50
        },
        {
            gender: 'male',
            height: 175,
            weight: 100
        },
        {
            gender: 'male',
            height: 180,
            weight: 70
        },
        {
            gender: "male",
            height: 180,
            weight: 90
        },
        {
            gender: "female",
            height: 110,
            weight: 70
        }
    ];
    const arrObjectSociality = [
        {
            friends: ["ibragim"],
            enemies: ["sasha", "masha"]
        },
        {
            friends: ["maru", "ibragim"],
            enemies: ["sasha", "masha"]
        },
        {
            friends: ["maru","lesha","masha"],
            enemies: []
        },
        {
            friends: [],
            enemies: ["maru","lesha", "ibra", "masha"]
        },
        {
            friends: [],
            enemies: []
        }
    ];

    const uniteNameSurname = (names, surnames) => {
        const result = [];
        for(let i = 0; i < names.length; i+=1) {
            const nameSurname = names[i] + ' ' + surnames[i]
            result.push(nameSurname)
        }
        return result;
    }

    const unitFullnameWithHomecity = (arrFullNames, homecityes) => {
        const result = [];
        for(let i = 0; i < arrFullNames.length; i+=1) {
            const obj = {
                fullName: arrFullNames[i],
                homecity: homecityes[i]
            }
            result.push(obj)
        }
        return result;
    }

    const uniteFullNameWithAge = (arrFullNames, ages) => {
        const result = [];
        for(let i = 0; i < arrFullNames.length; i+=1) {
            const obj = {
                fullName: arrFullNames[i],
                age: +ages[i]
            }
            result.push(obj)
        }
        return result;

    }
    // [ {fullname: 'maru pushkin', homecity: 'moscow'}... ]

    const fullNames = uniteNameSurname(arrName, arrSurname);
    const fullNamesZ = uniteNameSurname(arrNameZ, arrSurnameZ);
    const uniteFullNameHomecities = unitFullnameWithHomecity(fullNames, arrHomecity);
    const unitedFullNameAges = uniteFullNameWithAge(fullNames, arrAge);
    console.log(fullNames)
    console.log(fullNamesZ)
    console.log(uniteFullNameHomecities)
    console.log(unitedFullNameAges)
    // uniteNameSurname(arrNameZ);
    console.log('test')
    return (
        <div className={styles.hi}>
        </div>
    );
};

export default Test;
