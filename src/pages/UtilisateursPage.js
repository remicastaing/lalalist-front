import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import FormUtilisateur from "../components/FormUtilisateur";
import { APIService } from "../services/api";

function UtilisateursPage(props) {
    let navigate = useNavigate();
    return <UtilisateursPageWithNavigate {...props} navigate={navigate} />
}

class UtilisateursPageWithNavigate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            utilisateurs: []
        };
    }

    componentDidMount() {
        APIService.getUtilisateurs()
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        utilisateurs: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    open = async (id) => {
        this.props.navigate('/utilisateurs/' + id);
    }

    render() {
        const { error, isLoaded, utilisateurs } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Prénom</th>
                                <th>Nom</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {utilisateurs.map(utilisateur => (
                                <tr key={utilisateur.id} onClick={(e) => this.open(utilisateur.id)}>
                                    <td>{utilisateur.prenom}</td>
                                    <td>{utilisateur.nom}</td>
                                    <td>{utilisateur.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <FormUtilisateur />
                </div>
            );
        }
    }
}


export default UtilisateursPage