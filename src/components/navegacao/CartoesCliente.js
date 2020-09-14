import React, { useState, useEffect } from 'react'
import { Text, View, Alert, Button } from 'react-native'

export default function Lista(props) {
    const id = props.route.params.idCliente
    const [data, setData] = useState([])
    const string = 'https://cartoes-piotto.herokuapp.com/api/cartao/cliente/' + id
    useEffect(() => {
        fetch(string, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDg0ODY4MjAwMiIsInJvbGUiOiJST0xFX0VYQ0xVU0FPIiwiY3JlYXRlZCI6MTYwMDA0MjkxMDUwNSwiZXhwIjoxNjAwNjQ3NzEwfQ.ukCyrgOj9JfSnvllq9vtbi_2S-vUpXJndqOjyG1QX9l7iJeVEOGuueWceu5mDB2qKTZpRBZ3Fe0RROM46tszrw'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    if (response.status == 400) {
                        Alert.alert("O Cliente não possui cartões");
                        props.navigation.goBack()
                    }
                }
                return response.json()
            })
            .then((json) => {
                setData(json.dados)
            }
            )
            .catch((error) => {
                console.error(error)
            })
    }, []);

    function renderizacao() {

        if (data != null) {
            return (
                data.map(object => <>
                    <Text style={{ fontSize: 24, color: 'blue', fontWeight: 'bold' }}>
                        Cartao
                </Text>
                    <Text>
                        ID: {object.id}
                    </Text>
                    <Text>
                        Numero: {object.numero}
                    </Text>
                    <Text>
                        Data de Validade: {object.dataValidade}
                    </Text>
                    <Text>
                        Bloqueado: {object.bloqueado}
                    </Text>
                </>)
            )
        }
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {
                renderizacao()
            }
            <Button title="Voltar" onPress={() => props.navigation.goBack()} />
        </View>
    );
}